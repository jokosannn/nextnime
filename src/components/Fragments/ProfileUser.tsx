import Image from 'next/image';
import Link from 'next/link';

type ProfileUserProps = {
  img: string;
  name: string;
};

const ProfileUser: React.FC<ProfileUserProps> = ({ img, name }) => {
  return (
    <div className="mx-auto max-w-[230px] mt-10">
      <h1 className="text-black-gray text-center font-semibold text-xl mb-2">Welcome, {name}</h1>
      <div className="w-ful aspect-[1/1.2] border border-slate-200 p-2 flex flex-col items-center justify-between rounded-md shadow-sm overflow-hidden">
        <Image
          src={img}
          alt="profile"
          height={200}
          width={200}
          className="w-full h-full object-cover rounded-sm"
        />
      </div>
      <div className="flex gap-2 mt-3">
        <Link
          href={'/dashboard/profile/collection'}
          className="text-sm text-center px-2 py-2 w-full h-full bg-primary text-white rounded-sm"
        >
          My Collection
        </Link>
        <Link
          href={'/dashboard/profile/comment'}
          className="text-sm text-center px-2 py-2 w-full h-full bg-primary text-white rounded-sm"
        >
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default ProfileUser;
