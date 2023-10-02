import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const VideoUploader = ({ onUpload }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      onUpload && onUpload(file);
    }
  };

  return (
    <VideoUploadContainer>
      <HiddenInput type="file" accept="video/*" onChange={handleFileChange} />
      <UploadText>
        여기를 클릭해서 <br /> 동영상 업로드
      </UploadText>
    </VideoUploadContainer>
  );
};

VideoUploader.propTypes = {
  onUpload: PropTypes.func
};

export default VideoUploader;