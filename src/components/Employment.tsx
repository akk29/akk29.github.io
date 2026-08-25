import { Card, SectionHeading } from "./Card";
import { EmploymentBadgeVariant } from "./EmploymentBadgeVariant";

export function Employment() {

  return (
    <Card id="experience">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-1">
        <SectionHeading emoji="💼">
          <span className="mb-0">Employment History</span>
        </SectionHeading>
      </div>
       <EmploymentBadgeVariant /> 
    </Card>
  );
}
