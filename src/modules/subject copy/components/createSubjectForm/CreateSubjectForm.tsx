import useApiErrorByToast from "@/shared/hooks/useApiErrorByToast";
import { SubjectName, subjectSchema } from "@/shared/redux/features/subject/subject.model";
import { useCreateSubjectMutation } from "@/shared/redux/features/subject/subjectApi";
import Button from "@/shared/ui/button";
import Card from "@/shared/ui/card";
import Input from "@/shared/ui/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const CreateSubjectForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<SubjectName>({
    resolver: yupResolver(subjectSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });
  const [createSubject, { isError, isLoading, error }] = useCreateSubjectMutation();
  const onSubmit = async (data: SubjectName) => {
    try {
      const result = await createSubject(data).unwrap();
      if (result.status === "success") {
        toast.success(result.message);
        reset();
      }
    } catch (err) {
      console.log(err);
    }
  };
  useApiErrorByToast({ isError, error });
  return (
    <Card bgColor="theme">
      <Card.CardBody bgColor="theme" padding="xlg">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <Input
            {...register("name")}
            bgColor="theme"
            size="sm"
            label="Subject name"
            placeholder="Type subject name"
            errorMessage={errors.name?.message}
          />
          <Button
            size="size-3"
            width="full"
            color="theme"
            type="submit"
            loading={isLoading}
            disabled={!isValid || isLoading}
          >
            {isLoading === true ? "Creating..." : "Create subject"}
          </Button>
        </form>
      </Card.CardBody>
    </Card>
  );
};
export default CreateSubjectForm;
