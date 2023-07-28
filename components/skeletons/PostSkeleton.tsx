function PostSkeleton() {
    return (
        <div className="flex flex-col w-[395px] gap-4">
            <div className="h-[267px] w-full relative mb-5 rounded-[24px] skeletone-item image"></div>
            <div className="w-2/6 h-4 rounded-full skeletone-item type"></div>
            <div className="w-5/6 h-4 my-3 rounded-full skeletone-item title"></div>
        </div >
    )
}

export default PostSkeleton