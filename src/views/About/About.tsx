import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components';
import { PATH } from '../../constants';

import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-block">
        <img src="assets/img/gamemode3.jpg" alt="img" />
        <div className="about-text">
          <p className="about-title">Art Quiz - для любителей искусства</p>
          <span> Проверьте свои знания в мире изобразительного искусства или</span>
          <span>откройте для себя что-то новое при помощи нашего приложения.</span>
          <span>В Art Quiz для вас доступно:</span>
          <span> – 2 режима игры</span>
          <span> – 12 различных категорий</span>
          <span> – Более 200 увлекательных уровней</span>
          <Link to={PATH.home}>
            <Button text={'Начать'} onClick={() => {}} />
          </Link>
        </div>
      </div>
      <div className="about-block">
        <img src="assets/img/gamemode1.jpg" alt="img" />
        <div className="about-text">
          <p className="about-title">Режим &quot;Художники&quot;</p>
          <span>В этом режиме вам предстоит определить, кто нарисовал картину.</span>
          <span>Один уровень состоит из 10 тематических вопросов.</span>
          <span>Вам дается картина и 4 вариант ответа на выбор.</span>
          <span>Время на ответ не ограничено.</span>
          <Link to={PATH.artistQuiz}>
            <Button text={'Попробовать'} onClick={() => {}} />
          </Link>
        </div>
      </div>
      <div className="about-block">
        <img src="assets/img/gamemode2.jpg" alt="img" />
        <div className="about-text">
          <p className="about-title">Режим &quot;Картины&quot;</p>
          <span>Ваша задача - определить, какую из 4 картин нарисовал художник</span>
          <span>Один уровень состоит из 10 тематических вопросов.</span>
          <span>Вам дается художник и 4 картины на выбор.</span>
          <span>Время на ответ не ограничено.</span>
          <Link to={PATH.picturesQuiz}>
            <Button text={'Попробовать'} onClick={() => {}} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
