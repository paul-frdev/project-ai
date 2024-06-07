export type IPost = {
  imageUrl: string;
  id: string;
  createdAt: Date;
  title: string;
  content: string;
  publicId?: { publicId: string } | null;
};
