import React from "react";
import { Button } from "../TableRow/TableRow.styles";
type RefreshProps = {
  refresh: () => void;
  loading: boolean;
};

function RefreshBtn({ refresh, loading }: RefreshProps) {
  return (
    <div>
      <Button onClick={refresh} disabled={loading}>
        &#8635; Refresh
      </Button>
    </div>
  );
}

export default RefreshBtn;
