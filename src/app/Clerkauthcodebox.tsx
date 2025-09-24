'use client';
import React, { useEffect, useState } from 'react';
import { motion, useAnimate } from 'motion/react';

const Clerkauthcodebox = () => {
  const [isHovered, setIsHovered] = useState(false);

  const boxes = Array.from({ length: 6 });

  const [scope, animate] = useAnimate();

  const animation = async () => {
    await animate('.boxmoving', {
      display: 'block',
    });
    await animate(
      '.boxmoving',
      {
        marginLeft: '3rem',
      },
      {
        duration: 0.3,
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));
    await animate(
      '.boxmoving',
      {
        marginLeft: '6rem',
      },
      {
        duration: 0.3,
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));
    await animate(
      '.boxmoving',
      {
        marginLeft: '9rem',
      },
      {
        duration: 0.3,
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));
    await animate(
      '.boxmoving',
      {
        marginLeft: '12rem',
      },
      {
        duration: 0.3,
      }
    );
    await new Promise((resolve) => setTimeout(resolve, 300));
    await animate(
      '.boxmoving',
      {
        marginLeft: '15rem',
      },
      {
        duration: 0.3,
      }
    );
  };

  const stopAnimation = async () => {
    await animate('.boxmoving', {
      display: 'none',
    });
  };
  if (isHovered) {
    animation();
  } else {
    stopAnimation();
  }

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="box rounded-2xl bg-[#232328]">
        <div className="inbox relative flex h-72 w-96 flex-col items-center justify-center">
          <div className="mainboxdesing" ref={scope}>
            <div className="boxes relative flex items-center justify-center gap-4">
              <motion.div className="boxmoving absolute left-0 h-10 w-8 rounded-md border border-cyan-500 bg-white/10 shadow-2xl shadow-cyan-50">
                <div className="line absolute bottom-1.5 left-[3px] h-[1px] w-6 bg-cyan-500"></div>
              </motion.div>
              {boxes.map((_, i) => (
                <div
                  key={i}
                  className="flex h-10 w-8 items-center justify-center rounded-lg bg-[#131316]"
                ></div>
              ))}
            </div>
          </div>

          <div className="text relative order-last"></div>
        </div>
      </div>
    </div>
  );
};

export default Clerkauthcodebox;
