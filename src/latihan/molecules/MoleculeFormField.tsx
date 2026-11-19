import AtomLabel from '../atoms/AtomLabel';
import AtomInput from '../atoms/AtomInput';

type Props = {
  id: string;
  label: string;
  type: string;
};

const MoleculeFormField = ({ id, label, type = 'text' }: Props) => {
  return (
    <>
      <div className="mb-1">
        <AtomLabel htmlFor={id}>{label}</AtomLabel>
        <br />
        <AtomInput id={id} name={id} type={type} />
      </div>
    </>
  );
};

export default MoleculeFormField;
