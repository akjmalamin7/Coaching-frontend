import * as yup from "yup";
export interface SubjectName {
  name: string;
}
export const subjectSchema = yup.object().shape({
  name: yup.string().required("Subject name is required"),
});
