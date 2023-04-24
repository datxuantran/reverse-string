function reverse(sentence) {
  const words_array = sentence.split(" ");
  const reversed_words_array = words_array.reverse();
  const reverse_sentence = reversed_words_array.join(" ");
  return reverse_sentence;
}

const hey = "Hi Mom!";

module.exports = { hey, reverse };
