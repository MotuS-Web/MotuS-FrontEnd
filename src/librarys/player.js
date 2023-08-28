
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

class Player {
  static #instance = null;

  videoStream = null;

  guideDuration = null;

  status = 0;

  onError = (e) => {
    console.error(e);
  };

  // reducer dispatch
  dispatch = (value) => {};

  constructor() {}

  static getInstance() {
    if (!Player.#instance) {
      Player.#instance = new Player();
    }

    return Player.#instance;
  }

  setSubtitle(value) {
    this.dispatch({ type: "setSubtitle", payload: value });
  }

  setPlayButton(value) {
    this.dispatch({ type: "setPlayButton", payload: value });
  }

  setGuideButton(value) {
    this.dispatch({ type: "setGuideButton", payload: value });
  }

  async getVideoStream() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: 1280,
          height: 720,
          frameRate: {
            min: 24, // very important to define min value here
            ideal: 24,
            max: 25,
          },
        },
      });

      this.videoStream = stream;

      return stream;
    } catch (e) {
      if (e.message === "Permission denied") {
        this.onError({
          title: "권한 거부됨",
          message:
            "카메라 권한을 거부하셨습니다. 브라우저 설정에서 권한을 재설정해주세요.",
          isErrorModal: true,
        });
      }
    }
  }

  async playCountdown() {
    for (let i = 5; i > 0; i--) {
      this.dispatch({ type: "setCountdown", payload: i });
      await sleep(1000);
    }
    this.dispatch({ type: "setCountdown", payload: null });
  }

  async start() {
    this.setPlayButton(false);
    this.setSubtitle(
      "지금부터 '~~~' 운동을 해보겠습니다. 좌측 상단의 가이드 영상을 잘 봐주세요.",
    );

    await this.playCountdown();

    this.playGuide();
  }

  playGuide() {
    this.setPlayButton(false);
    this.setGuideButton(false);
    this.dispatch({ type: "playGuide" });
  }

  onPlayClick() {
    if (this.status === 0) {
      this.start();
    } else if (this.status === 1) {
      this.analyze();
    }
  }

  onGuideComplete() {
    if (this.status === 0) {
      this.status = 1;
      this.setSubtitle(
        "가이드 영상을 다시 보려면 다시보기 버튼을 누르고, 측정을 시작하려면 시작하기 버튼을 누르세요.",
      );

      this.setPlayButton(true);
      this.setGuideButton(true);
    } else if (this.status === 1) {
      this.setPlayButton(true);
      this.setGuideButton(true);
    } else if (this.status === 2) {
      this.setSubtitle(
        "프로그램을 완료하셨습니다. 운동 종료하기 버튼을 눌러서 나가세요.",
      );
    }
  }

  async analyze() {
    this.status = 2;
    this.setSubtitle(
      "지금부터 측정을 시작합니다. 가이드 영상을 잘 보고 따라해보세요.",
    );

    await this.playCountdown();

    this.playGuide();
    this.record();
  }

  async record() {
    const recorder = new MediaRecorder(this.videoStream, {
      mimeType: "video/webm;codecs=av1",
    });

    recorder.ondataavailable = (event) => {
      this.onRecordComplete(event.data);
    };

    console.log(this.guideDuration * 1000);

    recorder.start(this.guideDuration * 1000);

    setTimeout(() => recorder.stop(), this.guideDuration * 1000);
  }

  async onRecordComplete(data) {
    const blobUrl = URL.createObjectURL(data);
    const element = document.createElement("a");
    element.href = blobUrl;
    element.download = "Recorded Video.webm";
    element.click();
  }
}

export default Player.getInstance();