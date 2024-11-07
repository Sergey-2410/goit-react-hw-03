import s from './SearchBox.module.css';
const SearchBox = ({ dataRequest }) => {
  return (
    <div>
      <label className={s.label} htmlFor="">
        Find contacts by name
        <input type="text" name="userName" id="" onChange={dataRequest} />
      </label>
    </div>
  );
};
export default SearchBox;
