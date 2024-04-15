import { Text } from "./shared/ui/text";
import { Image } from "./shared/ui/image";
import { Card } from "./shared/ui/card";
import { Container } from "./shared/ui/container";
import { Button } from "./shared/ui/button";
import avatar from "./assets/avatar.jpg";
import { ShowCards } from "./shared/ui/showCards";
import { useState } from "react";
import { Modal } from "./shared/ui/modal";
import { defaultKnownSkills, defaultToKnowSkills } from "./const/skills";

export function App() {
  const [showSkills, setShowSkills] = useState(true);
  const [buttonText, setButtonText] = useState(true);
  const [modal, setModal] = useState(false);

  return (
    <>
      <Card size="L">
        <Image src={avatar} alt="Аватар"></Image>
        <Text color="black">Афанасьев Андрей Владиславович</Text>
      </Card>
      <Text color="white">Компетенции:</Text>
      <Container flexDirection="row">
        <Button onClick={() => {}} type="submit">
          {`навыки > 50%`}
        </Button>
        <Button onClick={() => {}} type="submit">
          {`навыки < 50%`}
        </Button>

        <Button
          onClick={() => {
            setShowSkills(!showSkills);
            setButtonText(!buttonText);
          }}
          type="submit"
        >
          {showSkills ? "Скрыть компетенции" : "Показать компетенции"}
        </Button>
        <Button
          onClick={() => {
            setModal(!modal);
          }}
          type="submit"
        >
          Добавить навык
        </Button>
      </Container>
      <Modal state={modal} onClick={() => {}}></Modal>
      <ShowCards
        show={showSkills}
        knowSkills={defaultKnownSkills}
        needKnowSkills={defaultToKnowSkills}
      ></ShowCards>
    </>
  );
}

export default App;
