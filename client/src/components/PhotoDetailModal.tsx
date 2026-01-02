import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Eye, Download, Share2, X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { zhTW } from "date-fns/locale";
import { useState } from "react";

interface PhotoDetailModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  photo: {
    id: string;
    imageUrl: string;
    title: string;
    description?: string;
    uploadedAt: Date;
    likes?: number;
    views?: number;
  } | null;
}

export default function PhotoDetailModal({
  open,
  onOpenChange,
  photo,
}: PhotoDetailModalProps) {
  const [isLiked, setIsLiked] = useState(false);

  if (!photo) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-6xl p-0 overflow-hidden" data-testid="modal-photo-detail">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 bg-muted flex items-center justify-center p-6 lg:p-8">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="max-h-[80vh] w-full object-contain rounded-2xl"
              data-testid="img-modal-photo"
            />
          </div>

          <div className="lg:w-96 p-6 lg:p-8 flex flex-col">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-2xl font-bold" data-testid="text-modal-title">
                {photo.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {photo.description || "照片詳情"}
              </DialogDescription>
            </DialogHeader>

            {photo.description && (
              <p className="text-muted-foreground mb-6" data-testid="text-modal-description">
                {photo.description}
              </p>
            )}

            <div className="flex items-center gap-3 mb-6">
              <Button
                variant={isLiked ? "default" : "outline"}
                size="default"
                className="rounded-full flex-1"
                onClick={() => {
                  setIsLiked(!isLiked);
                  console.log('Like toggled:', !isLiked);
                }}
                data-testid="button-like"
              >
                <Heart className={`h-4 w-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                {(photo.likes || 0) + (isLiked ? 1 : 0)}
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => console.log('Share clicked')}
                data-testid="button-share"
              >
                <Share2 className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={() => console.log('Download clicked')}
                data-testid="button-download"
              >
                <Download className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">瀏覽次數</span>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium" data-testid="text-modal-views">{photo.views || 0}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">上傳時間</span>
                <Badge variant="secondary" className="rounded-full" data-testid="badge-modal-time">
                  {formatDistanceToNow(photo.uploadedAt, { addSuffix: true, locale: zhTW })}
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
