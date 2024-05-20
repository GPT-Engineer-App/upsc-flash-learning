import React, { useState } from "react";
import { Container, VStack, HStack, Text, Button, Box, IconButton } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const flashcards = [
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "Who is the current Prime Minister of India?", answer: "Narendra Modi" },
  { question: "What is the largest state in India by area?", answer: "Rajasthan" },
  { question: "What is the national animal of India?", answer: "Bengal Tiger" },
  { question: "What is the national flower of India?", answer: "Lotus" },
];

const Flashcard = ({ card, showAnswer }) => (
  <Box borderWidth="1px" borderRadius="lg" p={4} width="100%" textAlign="center">
    <Text fontSize="xl">{showAnswer ? card.answer : card.question}</Text>
  </Box>
);

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNext = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handlePrev = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex - 1 + flashcards.length) % flashcards.length);
  };

  const toggleAnswer = () => {
    setShowAnswer((prevShowAnswer) => !prevShowAnswer);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Flashcard card={flashcards[currentCardIndex]} showAnswer={showAnswer} />
        <HStack spacing={4}>
          <IconButton aria-label="Previous" icon={<FaArrowLeft />} onClick={handlePrev} />
          <Button onClick={toggleAnswer}>{showAnswer ? "Show Question" : "Show Answer"}</Button>
          <IconButton aria-label="Next" icon={<FaArrowRight />} onClick={handleNext} />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;
