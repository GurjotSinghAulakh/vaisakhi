import Image from "next/image";

const DevImg = ({ containerStyles, imgSrc }) => {
  return (
    <div className={`${containerStyles}`} style={{ paddingLeft: '20px' }}>
      <Image src={imgSrc} width={530} height={460} priority alt="Dev Image" />
    </div>
  );
};

export default DevImg;
