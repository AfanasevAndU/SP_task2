import { FC, useState } from "react";
import type { ShowCardsProps, SkillCard } from "./showCards.types";
import { Container } from "../container";
import { Text } from "../text";
import { Image } from "../image";
import { Card } from "../card";
import { Modal } from "../modal";
import { Button } from "../button";

export const ShowCards: FC<ShowCardsProps> = ({
  show,
  knowSkills,
  needKnowSkills,
}) => {
  const [knownSkills, setAlreadyKnowSkills] =
    useState<Array<SkillCard>>(knowSkills);

  const [toKnowSkills, setToKnowSkills] =
    useState<Array<SkillCard>>(needKnowSkills);

  const [modal, setModal] = useState(false);

  if (show === false) {
    return (
      <Container flexDirection="row">
        <Text>Компетенций нет</Text>
      </Container>
    );
  }

  const onDeleteClickKnowSkills = (id: number) => {
    setAlreadyKnowSkills(knownSkills.filter((skill) => skill.id != id));
  };

  const onDeleteClickToKnowSkills = (id: number) => {
    setToKnowSkills(toKnowSkills.filter((skill) => skill.id != id));
  };

  const onClickPushSkills = (newSkill: SkillCard) => {
    if (newSkill.knowledge === 100) {
      const newSkills = [...knownSkills, newSkill];
      setAlreadyKnowSkills(newSkills);
    } else {
      const newSkills = [...toKnowSkills, newSkill];
      setToKnowSkills(newSkills);
    }
  };

  return (
    <>
      <Container flexDirection="row">
        {knownSkills.map((skill) => (
          <Card key={skill.id} size="M">
            <Image src={skill.src} alt={skill.alt}></Image>
            <Text color={skill.color}>{skill.title}</Text>
            <Text color={skill.color}>{skill.description}</Text>
            <Text color={skill.color}>{`Уровень: ${skill.knowledge}%`}</Text>
            <Button
              type="reset"
              onClick={() => onDeleteClickKnowSkills(skill.id)}
            >
              X
            </Button>
          </Card>
        ))}
      </Container>
      <Container flexDirection="row">
        <Button
          onClick={() => {
            setModal(!modal);
          }}
          type="submit"
        >
          Добавить навык
        </Button>
      </Container>
      <Modal state={modal} onCreate={onClickPushSkills}></Modal>
      <Text color="white"> Компетенции к изучению:</Text>
      <Container flexDirection="row">
        {toKnowSkills.map((skill) => (
          <Card key={skill.id} size="M">
            <Image src={skill.src} alt={skill.alt}></Image>
            <Text color={skill.color}>{skill.title}</Text>
            <Text color={skill.color}>{skill.description}</Text>
            <Text color={skill.color}>{`Уровень: ${skill.knowledge}%`}</Text>
            <Button
              type="reset"
              onClick={() => onDeleteClickToKnowSkills(skill.id)}
            >
              X
            </Button>
          </Card>
        ))}
      </Container>
    </>
  );
};
