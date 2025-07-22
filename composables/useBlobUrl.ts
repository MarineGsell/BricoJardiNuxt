export const useBlobUrl = () => {
  const getBlobUrl = (imagePath: string | null): string | null => {
    if (!imagePath) return null
    
    // Si c'est déjà du Base64 (ancien système), on le retourne tel quel
    if (imagePath.startsWith('data:')) {
      return imagePath
    }
    
    // Si c'est un chemin Blob, on génère l'URL
    return `/_hub/blob/${imagePath}`
  }

  return { getBlobUrl }
}