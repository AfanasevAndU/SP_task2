import { FC, useState } from "react";
import type { ShowCardsProps, SkillCard } from "./showCards.types";
import { Container } from "../container";
import { Text } from "../text";
import { Image } from "../image";
import { Card } from "../card";

import { Button } from "../button";

export const ShowCards: FC<ShowCardsProps> = ({
  show,
  knowSkills,
  needKnowSkills,
}) => {
  const [knownSkills, setAlreadyKnowArray] =
    useState<Array<SkillCard>>(knowSkills);

  const [toKnowSkills, setToKnowArray] =
    useState<Array<SkillCard>>(needKnowSkills);

  if (show === false) {
    return (
      <Container flexDirection="row">
        <Text>Компетенций нет</Text>
      </Container>
    );
  }

  const onDeleteClickKnowArray = (id: number) => {
    setAlreadyKnowArray(knownSkills.filter((skill) => skill.id != id));
  };

  const onDeleteClickToKnowArray = (id: number) => {
    setToKnowArray(toKnowSkills.filter((skill) => skill.id != id));
  };

  return (
    <>
      <Container flexDirection="row">
        {knownSkills.map((skill) => (
          <Card key={skill.id} size="M">
            <Image src={skill.src} alt={skill.alt}></Image>
            <Text color={skill.color}>{skill.title}</Text>
            <Text color={skill.color}>{`Уровень: ${skill.knowledge}%`}</Text>
            <Button
              type="reset"
              onClick={() => onDeleteClickKnowArray(skill.id)}
            >
              X
            </Button>
          </Card>
        ))}
      </Container>
      <Text color="white"> Компетенции к изучению:</Text>
      <Container flexDirection="row">
        {toKnowSkills.map((skill) => (
          <Card key={skill.id} size="M">
            <Image src={skill.src} alt={skill.alt}></Image>
            <Text color={skill.color}>{skill.title}</Text>
            <Text color={skill.color}>{`Уровень: ${skill.knowledge}%`}</Text>
            <Button
              type="reset"
              onClick={() => onDeleteClickToKnowArray(skill.id)}
            >
              X
            </Button>
          </Card>
        ))}
      </Container>
    </>
  );
};
