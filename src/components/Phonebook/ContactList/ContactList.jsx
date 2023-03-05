import PropTypes from "prop-types";
import css from "./ContactList.module.css"
const ContactList=({dataList,btnFunction})=>{
    //console.log(dataList);
    return (
        <ul className={css.contactList}>
            {dataList.map((item)=>{
                return (
                    <li key={item.id} className={css.contactList__item}>
                        <span className="contactList__itemName">{item.name}</span>
                        <span className="contactList__itemTel">{item.number}</span>
                        {btnFunction && 
                        <button 
                            className={css.contactList__button}
                            key={`btn_${item.id}`}
                            type="button" 
                            name={`button${item.id}`}
                            value={item.id}
                            onClick={btnFunction}>
                            delete
                        </button>
                        }
                    </li>
                );}
            )}
        </ul>
    );
}

export default ContactList;

ContactList.propTypes={
    dataList: PropTypes.array.isRequired,
    btnFunction: PropTypes.func,
}