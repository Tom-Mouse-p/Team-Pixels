// components/SearchInput.tsx
const SearchInput: React.FC = () => {
    return (
        <form
            onSubmit={(e) => e.preventDefault()}
            className="flex-1 items-center justify-start pb-4 lg:flex lg:pb-0"
        >
            <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                />
            </div>
        </form>
    );
};

export default SearchInput;