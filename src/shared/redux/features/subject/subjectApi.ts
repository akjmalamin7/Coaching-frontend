import { apiSlice } from "../api/apiSlice";
type Subject = {
  name: string;
  subject_code: string;
};
export const subjectApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createSubject: builder.mutation({
      query: (data) => ({
        url: "/subject/create",
        method: "POST",
        body: data,
      }),
    }),
    subjectList: builder.query<{ data: Subject[] }, void>({
      query: () => ({
        url: "/subject/list",
        method: "GET",
      }),
    }),
  }),
});

export const { useCreateSubjectMutation, useSubjectListQuery } = subjectApi;
