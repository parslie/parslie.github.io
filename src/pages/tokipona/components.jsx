function WordEntry({ data }) {
  const listToText = (list) => {
    let text = "";
    for (let i = 0; i < list.length; i++)
      text += (i !== 0) ? `, ${list[i]}` : list[i];
    return text;
  };

  const partOfSpeech = (title, list) => {
    return (
      <span className="part-of-speech">
        <b>{title}:</b> {listToText(list)}
      </span>
    );
  }

  return (
    <div className="word-entry">
      <h2 className="title">{data.name}</h2>

      {data.particles && partOfSpeech("particles", data.particles)}
      {data.nouns && partOfSpeech("nouns", data.nouns)}
      {data.adjectives && partOfSpeech("adjectives", data.adjectives)}
      {data.verbs && partOfSpeech("verbs", data.verbs)}
      {data.preverbs && partOfSpeech("pre-verbs", data.preverbs)}
      {data.prepositions && partOfSpeech("prepositions", data.prepositions)}
      {data.numbers && partOfSpeech("numbers", data.numbers)}
      
      <span className="example">
        <b>example:</b> "{data.example[0]}" - "{data.example[1]}"
      </span>
    </div>
  );
}

export { WordEntry };
