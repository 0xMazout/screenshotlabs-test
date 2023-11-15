import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  arrayData: { name: string; value: string; label: string }[];
  defaultValue?: string;
};
/** Hazardous name tbh */
const RadioMultipleSelect = ({ arrayData, defaultValue }: Props) => {
  const buildRadioGroup = () => {
    return arrayData.map((data, index) => {
      return (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem value={data.value} id={data.name} />
          <Label htmlFor={data.name}>{data.label}</Label>
        </div>
      );
    });
  };
  return (
    <RadioGroup defaultValue={defaultValue && defaultValue}>
      {buildRadioGroup()}
    </RadioGroup>
  );
};

export default RadioMultipleSelect;
