export function ContactInfoCard({ icon, title, content, className = "" }) {
    return (
        <div
            className={`bg-[#9B1915] text-white p-2 w-80 rounded-lg flex items-center gap-1 ${className}`}
        >
            <div className="flex-shrink-0">{icon}</div>
            <div>
                <h3 className="font-semibold text-lg mb-1">{title}</h3>
                <p className="text-red-150 break-words whitespace-normal">{content}</p>
            </div>
        </div>
    );
}
