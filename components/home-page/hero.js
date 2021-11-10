import classes from './hero.module.css';

import Image from 'next/image';

const Hero = (props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/images/site/bird.png" alt="no image" width={300} height={300} />
      </div>
      <h1>hi im afdsf</h1>
      <p>I blog about web dev - especially</p>
    </section>
  );
};

export default Hero;
