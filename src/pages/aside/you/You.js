import styles from './You.module.scss';

function You() {
  const Lists = [
    {
      link: require('../../../assets/video/video3.mp4'),
      image: require('../../../assets/image/pic3.jpg'),
    },
    {
      link: require('../../../assets/video/video2.mp4'),
      image: require('../../../assets/image/pic2.jpg'),
    },
    {
      link: require('../../../assets/video/video1.mp4'),
      image: require('../../../assets/image/pic1.jpg'),
    },
  ];

  return (
    <>
      {Lists.map((video, index) => {
        return (
          <div className={styles['container']} key={index}>
            <a
              href={video.link}
              className={styles['video']}
              target="_self"

              // onMouseEnter={video.play()}
            >
              <img
                style={{
                  width: '400px',
                  height: '220px',
                  borderRadius: '20px',
                }}
                src={video.image}
              ></img>
            </a>
            <div style={{ fontWeight: '500' }}>
              Đồng hồ đếm ngược dành cho ai làm video 10s
            </div>
            <div>MathTex</div>
            <small>99N lượt xem </small>
          </div>
        );
      })}
    </>
  );
}

export default You;
