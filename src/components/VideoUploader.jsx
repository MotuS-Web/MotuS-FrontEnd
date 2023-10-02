import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useState } from 'react';

const VideoUploadContainer = styled.div`
  width: 540px;
  height: 500px;
  background-color: #242424;
  border: 1px solid #444444;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; 
  position: relative;
  overflow: hidden; 

  &:hover {
    opacity: 0.8;
  }
`;

const UploadText = styled.span`
  color: #484848;
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const HiddenInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const VideoPreview = styled.video`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const VideoUploader = ({ onUpload }) => {
  const [videoPreview, setVideoPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // 파일 객체에서 URL을 생성하여 미리보기에 사용
      const videoURL = URL.createObjectURL(file);
      setVideoPreview(videoURL);
      onUpload && onUpload(file);
    }
  };

  return (
    <VideoUploadContainer>
      <HiddenInput type="file" accept="video/*" onChange={handleFileChange} />
      {videoPreview ? (
        <VideoPreview controls src={videoPreview} />
      ) : (
        <UploadText>
          여기를 클릭해서 <br /> 동영상 업로드
        </UploadText>
      )}
    </VideoUploadContainer>
  );
};

VideoUploader.propTypes = {
  onUpload: PropTypes.func,
};

export default VideoUploader;