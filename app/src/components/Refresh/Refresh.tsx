import React from "react";
type RefreshProps = {
  refresh: () => void;
  loading: boolean;
};

function RefreshBtn({ refresh, loading }: RefreshProps) {
  return (
    <div>
      <button onClick={refresh} disabled={loading}>
        Refresh
      </button>
    </div>
  );
}

export default RefreshBtn;
