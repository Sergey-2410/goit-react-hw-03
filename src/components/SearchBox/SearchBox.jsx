import s from './SearchBox.module.css';
const SearchBox = ({ dataRequest }) => {
  return (
    <div className={s.searchBox}>
      <label className={s.label} htmlFor="">
        Find contacts by name
        <input
          className={s.input}
          type="text"
          name="userName"
          id=""
          onChange={dataRequest}
        />
      </label>
    </div>
  );
};
export default SearchBox;
