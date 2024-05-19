import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import Layout from "../layouts/Layout";
import { useUpdateMyUser, useGetMyUser } from "@/api/MyUserApi";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>...Loading</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return (
    <Layout>
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </Layout>
  );
};

export default UserProfilePage;
