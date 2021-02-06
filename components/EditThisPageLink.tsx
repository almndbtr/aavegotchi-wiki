const EditThisPageLink = (props) => {
  const lang = props.lang;
  const pageID =  props.pageID;

  return (
    <div style={{marginTop: '1rem'}}>
      <a href={`https://github.com/aavegotchi/aavegotchi-wiki/edit/main/posts/${lang}/${pageID}.md`}>
        ✏️ Edit this page
      </a>
    </div>
  );
};

export default EditThisPageLink;