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

  const [originalSkills, setOriginalSkills] = useState(toKnowSkills);

  const onDeleteClickKnowSkills = (id: number) => {
    setAlreadyKnowSkills(knownSkills.filter((skill) => skill.id != id));
  };

  const onDeleteClickToKnowSkills = (id: number) => {
    setToKnowSkills(toKnowSkills.filter((skill) => skill.id != id));
    setOriginalSkills(originalSkills.filter((skill) => skill.id != id));
  };

  const onClickPushSkills = (newSkill: SkillCard) => {
    if (newSkill.knowledge === 100) {
      const newSkills = [...knownSkills, newSkill];
      setAlreadyKnowSkills(newSkills);
    } else {
      const newSkills = [...toKnowSkills, newSkill];
      setToKnowSkills(newSkills);
      setOriginalSkills(newSkills);
    }
  };

  const onClickShowGoodKnownSkills = (knowledge = 50) => {
    setToKnowSkills(
      originalSkills.filter((skill) => skill.knowledge >= knowledge)
    );
  };

  const onClickShowBadKnownSkills = (knowledge = 50) => {
    setToKnowSkills(
      originalSkills.filter((skill) => skill.knowledge < knowledge)
    );
  };

  const onClickShowSkills = () => {
    setToKnowSkills(originalSkills);
  };

  const [showModal, setShowModal] = useState(false);

  if (show === false) {
    return (
      <Container flexDirection="row">
        <Text>Компетенций нет</Text>
      </Container>
    );
  }

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
            onClickShowGoodKnownSkills();
          }}
          type="submit"
        >
          {`навыки > 50%`}
        </Button>
        <Button
          onClick={() => {
            onClickShowSkills();
          }}
          type="submit"
        >
          {`Все навыки`}
        </Button>
        <Button
          onClick={() => {
            setShowModal(!showModal);
          }}
          type="submit"
        >
          Добавить навык
        </Button>
        <Button
          onClick={() => {
            onClickShowBadKnownSkills();
          }}
          type="submit"
        >
          {`навыки < 50%`}
        </Button>
      </Container>
      <Modal state={showModal} onCreate={onClickPushSkills}></Modal>
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
