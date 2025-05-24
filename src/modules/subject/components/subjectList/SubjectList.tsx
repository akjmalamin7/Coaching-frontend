import { useSubjectListQuery } from "@/shared/redux/features/subject/subjectApi";
import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";

const SubjectList = () => {
  const { data, isLoading, isError } = useSubjectListQuery();

  const subjects = data?.data || [];

  const renderHeader = () => (
    <div className="grid grid-cols-2 bg-gray-200 dark:bg-gray-700">
      <div className="border-r border-gray-300 p-2">
        <Text color="theme" size="md">
          Name
        </Text>
      </div>
      <div className="p-2">
        <Text color="theme" size="md">
          Subject Code
        </Text>
      </div>
    </div>
  );

  const renderSubjects = () =>
    subjects.map((subject, index) => (
      <div key={index} className="grid grid-cols-2 border-t border-gray-300">
        <div className="border-r border-gray-300 p-2">
          <Text color="theme" size="md">
            {subject.name}
          </Text>
        </div>
        <div className="p-2">
          <Text color="theme" size="md">
            {subject.subject_code || "N/A"}
          </Text>
        </div>
      </div>
    ));

  const renderStatus = () => {
    if (isLoading) {
      return (
        <div className="p-4 text-center">
          <Text color="theme">Loading...</Text>
        </div>
      );
    }

    if (isError) {
      return (
        <div className="p-4 text-center text-red-500">
          <Text color="theme">Failed to load subjects.</Text>
        </div>
      );
    }

    if (subjects.length === 0) {
      return (
        <div className="p-4 text-center">
          <Text color="theme">No subjects found.</Text>
        </div>
      );
    }

    return renderSubjects();
  };

  return (
    <Card bgColor="theme">
      <Card.CardBody bgColor="theme" padding="md">
        <div className="border border-gray-300 rounded-md overflow-hidden">
          {renderHeader()}
          {renderStatus()}
        </div>
      </Card.CardBody>
    </Card>
  );
};

export default SubjectList;
