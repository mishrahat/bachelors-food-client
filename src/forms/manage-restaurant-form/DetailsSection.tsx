import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription>
          Enter the Details about your restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" />
            </FormControl>
          </FormItem>
        )}
      />
      <div className="flex gap-4">
        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={control}
        name="deliveryPrice"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Delivery Price ($)</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" placeholder="1.50" />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="estimatedDeliveryTime"
        render={({ field }) => (
          <FormItem className="max-w-[25%]">
            <FormLabel>Estimated Delivery Time</FormLabel>
            <FormControl>
              <Input {...field} className="bg-white" placeholder="30" />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default DetailsSection;
