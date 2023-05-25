import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css';
const GoToTop = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const listenToScroll = () => {
    let heightToHidden = 600;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', listenToScroll);
    return () => window.removeEventListener('scroll', listenToScroll);
  }, []);

  return (
    <Wrapper>
      {isVisible && (
        <div
          data-aos="fade-up"
          className="top-btn"
          style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}
          onClick={goToBtn}
        >
          <FaArrowUp className="top-btn--icon" />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 1.8rem;
    width: 4rem;
    height: 4rem;
    color: #f9f9f9;
    background-color: #0097b2;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    border-radius: 50%;
    position: fixed;
    bottom: 3rem;
    right: 4rem;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.4rem);
      }
      100% {
        transform: translateY(0.5rem);
      }
    }
  }
  @media (max-width: 650px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .top-btn {
      width: 3rem;
      height: 3rem;
      bottom: 7rem;
      right: 3rem;
      font-size: 1.4rem;
      position: fixed;
    }
    &--icon {
      animation: gototop 1s linear infinite alternate-reverse;
    }
    @keyframes gototop {
      0% {
        transform: translateY(-0.3rem);
      }
      100% {
        transform: translateY(0.4rem);
      }
    }
  }
`;
export default GoToTop;
