export const useBlobUrl = () => {
  const getBlobUrl = (imagePath: string | null): string | null => {
    if (!imagePath) return null
    
    if (imagePath.startsWith('data:')) {
      return imagePath
    }
    
    // CORRECTION : Ajouter /api/ devant
    const url = `/api/_hub/blob/${imagePath}`
    console.log('🔗 URL générée:', url, 'pour le chemin:', imagePath)
    return url
  }

  return { getBlobUrl }
}