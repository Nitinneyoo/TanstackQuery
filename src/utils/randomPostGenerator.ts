const authors = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Wilson", "Emma Davis"];
const topics = ["Technology", "Science", "Art", "Travel", "Food", "Music"];

export const generateRandomPost = () => {
  const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
  const randomTopic = topics[Math.floor(Math.random() * topics.length)];

  return {
    title: `${randomTopic} Update ${new Date().toLocaleTimeString()}`,
    content: `This is a randomly generated post about ${randomTopic.toLowerCase()} created at ${new Date().toLocaleString()}`,
    author: randomAuthor
  };
};
