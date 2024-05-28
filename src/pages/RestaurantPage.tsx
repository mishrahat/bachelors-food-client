import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import Layout from "@/layouts/Layout";

const RestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  if (isCreateLoading) {
    <span>... Loading</span>;
  }
  return (
    <Layout>
      <ManageRestaurantForm
        onSave={restaurant ? updateRestaurant : createRestaurant}
        isLoading={isCreateLoading || isUpdateLoading}
        restaurant={restaurant}
      />
    </Layout>
  );
};

export default RestaurantPage;
