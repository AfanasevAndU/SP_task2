import { Text } from "./shared/ui/text";
import { Image } from "./shared/ui/image";
import { Card } from "./shared/ui/card";
import { Container } from "./shared/ui/container";
import avatar from "./images/avatar.jpg";
import css from "./images/CSS.png";
import git from "./images/git.png";
import js from "./images/js.webp";
import nodejs from "./images/nodejs.png";
import react from "./images/react.jpg";
import ts from "./images/ts.png";
import docker from "./images/docker.png";
import postgresql from "./images/postgresql.jpg";
import linux from "./images/linux.jpg";
import python from "./images/python.webp";
import cicd from "./images/cicd.png";
import mobx from "./images/mobx.png";
import django from "./images/django.png";

function App() {
  return (
    <>
      <Card size="L">
        <Image src={avatar} alt="Аватар"></Image>
        <Text color="black">Афанасьев Андрей Владиславович</Text>
      </Card>
      <Text color="white">Компетенции:</Text>
      <Container flexDirection="row">
        <Card size="M">
          <Image src={css} alt="Css"></Image>
          <Text color="black">Css</Text>
        </Card>
        <Card size="M">
          <Image src={react} alt="react"></Image>
          <Text color="black">React Native</Text>
        </Card>
        <Card size="M">
          <Image src={git} alt="git"></Image>
          <Text color="black">Git</Text>
        </Card>
        <Card size="M">
          <Image src={js} alt="js"></Image>
          <Text color="black">JS</Text>
        </Card>
      </Container>
      <Text color="white"> Компетенции к изучению:</Text>
      <Container flexDirection="row">
        <Card size="M">
          <Image src={ts} alt="typescript"></Image>
          <Text color="black">TS</Text>
        </Card>
        <Card size="M">
          <Image src={python} alt="python"></Image>
          <Text color="black">Python</Text>
        </Card>
        <Card size="M">
          <Image src={react} alt="react"></Image>
          <Text color="black">React</Text>
        </Card>
        <Card size="M">
          <Image src={nodejs} alt="nodejs"></Image>
          <Text color="black">Node JS</Text>
        </Card>
        <Card size="M">
          <Image src={docker} alt="docker"></Image>
          <Text color="black">Docker</Text>
        </Card>
        <Card size="M">
          <Image src={postgresql} alt="postgresql"></Image>
          <Text color="black">PostgreSQL</Text>
        </Card>
        <Card size="M">
          <Image src={cicd} alt="cicd"></Image>
          <Text color="black">ci/cd</Text>
        </Card>
        <Card size="M">
          <Image src={mobx} alt="mobx"></Image>
          <Text color="black">MobX</Text>
        </Card>
        <Card size="M">
          <Image src={linux} alt="linux"></Image>
          <Text color="black">Linux</Text>
        </Card>
        <Card size="M">
          <Image src={django} alt="django"></Image>
          <Text color="black">Django</Text>
        </Card>
      </Container>
    </>
  );
}

export default App;
