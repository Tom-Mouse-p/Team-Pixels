interface AvatarProps {
    userProfileImage: string;
}
const AvatarMenu: React.FC<AvatarProps> = ({ userProfileImage }) => {
    return (
        <div>
            <img
                className="rounded-full"
                src={userProfileImage}
                alt="profile pic"
            />
        </div>
    );
};

export default AvatarMenu;
