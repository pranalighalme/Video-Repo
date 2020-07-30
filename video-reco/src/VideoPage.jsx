
import React,{useState} from 'react';
import Camera, { IMAGE_TYPES } from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function dataURItoBlob (dataURI) {
  let byteString = atob(dataURI.split(',')[1]);

  let mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  let ab = new ArrayBuffer(byteString.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  let blob = new Blob([ab], {type: mimeString});
  return blob;
}

function padWithZeroNumber (number, width) {
  number = number + '';
  return number.length >= width
    ? number
    : new Array(width - number.length + 1).join('0') + number;
}

function getFileExtention (blobType) {
  let extention = IMAGE_TYPES.PNG;

  if (blobType === 'image/jpeg') {
    extention = IMAGE_TYPES.JPG;
  }
  return extention;
}

function getFileName (imageNumber, blobType) {
  const prefix = 'photo';
  const photoNumber = padWithZeroNumber(imageNumber, 4);
  const extention = getFileExtention(blobType);

  return `${prefix}-${photoNumber}.${extention}`;
}

function downloadImageFileFomBlob (blob, imageNumber) {
  window.URL = window.webkitURL || window.URL;

  let anchor = document.createElement('a');
  anchor.download = getFileName(imageNumber, blob.type);
  anchor.href = window.URL.createObjectURL(blob);
  let mouseEvent = document.createEvent('MouseEvents');
  mouseEvent.initMouseEvent('click', true, true, window, 1, 0, 0, 0, 0, false, false, false, false, 0, null);
  anchor.dispatchEvent(mouseEvent);
}

function downloadImageFile (dataUri, imageNumber) {
  let blob = dataURItoBlob(dataUri);
  downloadImageFileFomBlob(blob, imageNumber);
}
 
function VideoPage (props) {
  const [imageNumber, setImageNumber] = useState(0);

  function handleTakePhoto (dataUri) {
    downloadImageFile(dataUri, imageNumber);
    setImageNumber(imageNumber + 1);
  }

  return (
      <div>
      <Camera
        onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
        imageType = {IMAGE_TYPES.JPG}
        imageCompression = {0.97}
        isMaxResolution = {true}
        isImageMirror = {false}
        isSilentMode = {false}
        isDisplayStartCameraError = {true}
        isFullscreen = {false}
        sizeFactor = {1}
      />
      </div>
  );
}
 
export default VideoPage;