import React, { Suspense } from "react";
import LoadingElement from "../components/main/loading";
import CustomerReviewClient from "./customerReviewClient";

function ReviewsListPage() {
  return (
    <Suspense
      fallback={
        <div className="h-screen flex items-center justify-center">
          <LoadingElement size="large" />
        </div>
      }
    >
      <CustomerReviewClient />
    </Suspense>
  );
}

export default ReviewsListPage;
