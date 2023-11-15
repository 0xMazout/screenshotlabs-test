import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type Props = {
  arrayData: { value: string; label: string }[];
  defaultValue?: string;
  setValueSelected: (value: string) => void;
};
/** Hazardous name tbh */
const RadioMultipleSelect = ({
  arrayData,
  defaultValue,
  setValueSelected,
}: Props) => {
  const buildRadioGroup = () => {
    return arrayData.map((data, index) => {
      return (
        <div key={index} className="flex items-center space-x-2">
          <RadioGroupItem
            value={data.value}
            id={data.value}
            onSelect={() => setValueSelected(data.value)}
          />
          <Label htmlFor={data.value}>{data.label}</Label>
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
