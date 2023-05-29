import Contact from "../components/Contacts/Card/Contact";

import { useModal } from "../hooks/useModal";

import Add from "../components/Contacts/Forms/Add";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Layout from "../components/Layout";

const Contacts = () => {
  const { toggle, setSelected } = useModal();
  const contacts = useSelector((state: RootState) => state.contacts);
  return (
    <Layout>
      <div className="flex justify-end py-7 relative">
        <button
          onClick={() => {
            toggle();
            setSelected(<Add />);
          }}
          className="fixed z-[9] top-[70px] md:top-3 right-5 bg-blue-500 text-white px-3 py-2 rounded-lg border-blue-500 shadow hover:bg-blue-600  "
        >
          Add
        </button>
      </div>
      <div className="grid  md:grid-cols-3  gap-3">
        {/*loop through contacts and return a Contact component with the content item passed as a prop */}

        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <Contact key={contact.name} contact={contact} />
          ))
        ) : (
          <div>No contacts added</div>
        )}
      </div>
    </Layout>
  );
};

export default Contacts;
