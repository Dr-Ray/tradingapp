import React from "react";
import QRCode from "react-native-qrcode-svg";

const QrCodeGen = ({qrValue}) => {

  return (
    <QRCode
        value={qrValue}
        size={200}
        color="white"
        backgroundColor="black"
      />
  );
};

export default QrCodeGen;
