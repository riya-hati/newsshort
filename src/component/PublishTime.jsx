import { formatDistanceToNow } from "date-fns";

const PublishedTime = ({ publishedAt }) => {
	// Convert the publishedAt string to a Date object
	const publishedDate = new Date(publishedAt);

	// Get the relative time (e.g., "3 days ago")
	const relativeTime = formatDistanceToNow(publishedDate, { addSuffix: true });

	return (
		<div>
			<p>Published {relativeTime}</p>
		</div>
	);
};

export default PublishedTime;
