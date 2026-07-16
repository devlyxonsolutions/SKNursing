'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Folder, FolderPlus, Plus, Trash2, Eye, X, ChevronLeft, 
  ChevronRight, ArrowLeft, Image as ImageIcon, Search, Info, HelpCircle
} from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string;
  caption: string;
}

interface GalleryFolder {
  id: string;
  name: string;
  description: string;
  coverImage: string;
  createdAt: string;
  images: GalleryImage[];
}

const INITIAL_FOLDERS: GalleryFolder[] = [
  {
    id: "fld-nurses-day",
    name: "International Nurses Day 2026",
    description: "Florence Nightingale lamp lighting, oath-taking ceremony, and student presentations.",
    coverImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
    createdAt: "12 May 2026",
    images: [
      {
        id: "img-n1",
        url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80",
        caption: "Lamp lighting oath-taking ceremony on International Nurses Day."
      },
      {
        id: "img-n2",
        url: "https://images.unsplash.com/photo-1579684389782-64d84b5e901a?auto=format&fit=crop&w=1200&q=80",
        caption: "Students receiving their nurse caps during the graduation event."
      }
    ]
  },
  {
    id: "fld-labs",
    name: "Clinical Laboratories & Training Wards",
    description: "Hands-on procedural practices in our fully equipped diagnostic and pediatric labs.",
    coverImage: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    createdAt: "22 April 2026",
    images: [
      {
        id: "img-l1",
        url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
        caption: "Students practicing clinical procedures in the primary demonstration laboratory."
      },
      {
        id: "img-l2",
        url: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80",
        caption: "Senior faculty guiding bedside pediatric nursing and ICU simulation protocols."
      }
    ]
  },
  {
    id: "fld-classrooms",
    name: "Theory Lectures & Smart Classes",
    description: "Interactive smart classrooms designed to build robust theoretical and medical-surgical baselines.",
    coverImage: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
    createdAt: "15 March 2026",
    images: [
      {
        id: "img-c1",
        url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80",
        caption: "Interactive theory learning seminar on clinical diagnostics, microbiology, and human anatomy."
      }
    ]
  },
  {
    id: "fld-hospitals",
    name: "Super-Specialty Hospital Placements",
    description: "Clinical bedside learning and rotations at our premium affiliated diagnostic and critical centers.",
    coverImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
    createdAt: "10 February 2026",
    images: [
      {
        id: "img-h1",
        url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
        caption: "Advanced medical diagnostic setups at our partner super-specialty hospital."
      }
    ]
  },
  {
    id: "fld-library",
    name: "Medical Library & Research Center",
    description: "Comfortable spacious learning zones with thousands of premium textbooks, health magazines, and journals.",
    coverImage: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
    createdAt: "18 January 2026",
    images: [
      {
        id: "img-lib1",
        url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=1200&q=80",
        caption: "The extensive medical library layout housing books on pharmacology, nutrition, and psychiatry."
      }
    ]
  }
];

const PRESET_IMAGES = [
  { label: "Lab Practice Setup", url: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=1200&q=80" },
  { label: "Operation Theater Simulation", url: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&w=1200&q=80" },
  { label: "Anatomy Lecture Hall", url: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=80" },
  { label: "Neonatal & Pediatrics", url: "https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=1200&q=80" },
  { label: "Rural Health Outreach Camp", url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" },
  { label: "Nurses Lamp Ceremony", url: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=1200&q=80" },
  { label: "Cardiology Equipment Ward", url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80" },
  { label: "Professional Medical Team", url: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80" }
];

export default function GallerySection() {
  const [folders, setFolders] = useState<GalleryFolder[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolderId, setSelectedFolderId] = useState<string | null>(null);
  
  // Modal states
  const [isNewFolderOpen, setIsNewFolderOpen] = useState(false);
  const [isAddImageOpen, setIsAddImageOpen] = useState(false);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  // New folder form inputs
  const [newFolderName, setNewFolderName] = useState('');
  const [newFolderDesc, setNewFolderDesc] = useState('');
  const [newFolderCover, setNewFolderCover] = useState('');

  // New image form inputs
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newImageCaption, setNewImageCaption] = useState('');

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('sk_nursing_gallery_folders_v2');
    if (saved) {
      try {
        setFolders(JSON.parse(saved));
      } catch (e) {
        setFolders(INITIAL_FOLDERS);
      }
    } else {
      setFolders(INITIAL_FOLDERS);
      localStorage.setItem('sk_nursing_gallery_folders_v2', JSON.stringify(INITIAL_FOLDERS));
    }
  }, []);

  // Save to localStorage
  const saveFolders = (updated: GalleryFolder[]) => {
    setFolders(updated);
    localStorage.setItem('sk_nursing_gallery_folders_v2', JSON.stringify(updated));
  };

  // Find currently active folder
  const currentFolder = folders.find(f => f.id === selectedFolderId);

  // Handle new folder creation
  const handleCreateFolder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFolderName.trim()) return;

    const newFolder: GalleryFolder = {
      id: `fld-${Date.now()}`,
      name: newFolderName,
      description: newFolderDesc || "No description provided.",
      coverImage: newFolderCover || "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
      createdAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      images: []
    };

    const updated = [newFolder, ...folders];
    saveFolders(updated);

    // Reset inputs
    setNewFolderName('');
    setNewFolderDesc('');
    setNewFolderCover('');
    setIsNewFolderOpen(false);
  };

  // Handle deleting a folder
  const handleDeleteFolder = (folderId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this event folder? This will delete all images inside it.")) {
      const updated = folders.filter(f => f.id !== folderId);
      saveFolders(updated);
      if (selectedFolderId === folderId) {
        setSelectedFolderId(null);
      }
    }
  };

  // Handle adding image to folder
  const handleAddImageToFolder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedFolderId || !newImageUrl.trim()) return;

    const newImage: GalleryImage = {
      id: `img-${Date.now()}`,
      url: newImageUrl,
      caption: newImageCaption || "S K Nursing College Event Photo"
    };

    const updated = folders.map(f => {
      if (f.id === selectedFolderId) {
        // Also update cover image to the latest uploaded if none existed or default
        const updatedImages = [...f.images, newImage];
        return {
          ...f,
          coverImage: f.coverImage.includes("photo-1576091160550-2173dba999ef") ? newImageUrl : f.coverImage,
          images: updatedImages
        };
      }
      return f;
    });

    saveFolders(updated);

    // Reset inputs
    setNewImageUrl('');
    setNewImageCaption('');
    setIsAddImageOpen(false);
  };

  // Handle deleting image from folder
  const handleDeleteImage = (imageId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Remove this photo from the event folder?")) {
      const updated = folders.map(f => {
        if (f.id === selectedFolderId) {
          return {
            ...f,
            images: f.images.filter(img => img.id !== imageId)
          };
        }
        return f;
      });
      saveFolders(updated);
    }
  };

  // Filter folders list based on search
  const filteredFolders = folders.filter(folder => 
    folder.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    folder.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Carousel handlers inside lightbox
  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentFolder && selectedImageIdx !== null) {
      setSelectedImageIdx(prev => 
        prev === null || prev === 0 ? currentFolder.images.length - 1 : prev - 1
      );
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentFolder && selectedImageIdx !== null) {
      setSelectedImageIdx(prev => 
        prev === null || prev === currentFolder.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <section className="py-16 bg-[#F8FAFC] min-h-[80vh]" id="events-gallery-root">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-gray-200/60 pb-8">
          <div className="space-y-3">
            <span className="text-xs font-display font-bold uppercase tracking-widest text-brand-gold bg-brand-gold/10 px-3.5 py-1 rounded-full inline-block">
              Institutional Media Log
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
              Interactive Events Gallery
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed font-sans font-light max-w-2xl">
              Create specific event folders, upload nursing field pictures, and organize memories from annual workshops, cultural fests, and clinical internships.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
            {/* Search Input (Only shown on Folder List View) */}
            {!selectedFolderId && (
              <div className="relative w-full sm:w-64">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  id="gallery-search-input"
                  type="text"
                  placeholder="Search folders..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white text-dark-navy text-xs pl-10 pr-4 py-3 rounded-xl border border-gray-200 outline-none focus:border-brand-blue transition-colors placeholder-gray-400 font-sans"
                />
              </div>
            )}

            {/* CTA to Create New Folder */}
            {!selectedFolderId ? (
              <button
                id="btn-create-folder-trigger"
                onClick={() => setIsNewFolderOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-display font-bold px-5 py-3 rounded-xl flex items-center justify-center space-x-2 shadow-sm transition cursor-pointer self-start sm:self-auto"
              >
                <FolderPlus size={16} />
                <span>Create Event Folder</span>
              </button>
            ) : (
              <button
                id="btn-back-to-folders"
                onClick={() => setSelectedFolderId(null)}
                className="bg-white hover:bg-gray-50 text-dark-navy text-xs font-display font-bold px-4 py-3 rounded-xl border border-gray-200 flex items-center space-x-2 transition cursor-pointer self-start"
              >
                <ArrowLeft size={16} />
                <span>Back to Folders</span>
              </button>
            )}
          </div>
        </div>

        {/* ==================== FOLDER LIST VIEW ==================== */}
        {!selectedFolderId && (
          <div className="space-y-8 animate-none">
            {filteredFolders.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200 max-w-xl mx-auto space-y-4">
                <Folder size={48} className="mx-auto text-gray-300" />
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-gray-700">No folders found</h4>
                  <p className="text-xs text-gray-400 font-sans">
                    {searchQuery ? "Try adjusting your search terms." : "Create your very first event folder using the button above."}
                  </p>
                </div>
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="text-xs text-brand-blue font-bold underline hover:text-brand-blue-hover cursor-pointer"
                  >
                    Clear Search Query
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredFolders.map((folder) => (
                  <motion.div
                    key={folder.id}
                    layoutId={`folder-card-${folder.id}`}
                    onClick={() => setSelectedFolderId(folder.id)}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
                  >
                    <div>
                      {/* Cover Photo */}
                      <div className="h-48 overflow-hidden relative bg-gray-100">
                        <img
                          src={folder.coverImage}
                          alt={folder.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-dark-navy/20 group-hover:bg-dark-navy/40 transition-all duration-300" />
                        
                        {/* Folder Label */}
                        <span className="absolute top-3 left-3 bg-brand-blue/90 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm shadow flex items-center space-x-1.5">
                          <Folder size={11} className="fill-white" />
                          <span>{folder.images.length} {folder.images.length === 1 ? 'Photo' : 'Photos'}</span>
                        </span>

                        {/* Hover Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-dark-navy/30 backdrop-blur-[2px]">
                          <span className="bg-white text-brand-blue text-xs font-display font-bold px-4 py-2 rounded-xl shadow-lg flex items-center space-x-1">
                            <Eye size={14} />
                            <span>Open Folder</span>
                          </span>
                        </div>
                      </div>

                      {/* Info body */}
                      <div className="p-6 space-y-2">
                        <span className="text-[10px] text-gray-400 font-mono font-medium block">
                          Created: {folder.createdAt}
                        </span>
                        <h3 className="font-display font-bold text-base text-brand-blue group-hover:text-brand-blue-hover transition-colors leading-snug">
                          {folder.name}
                        </h3>
                        <p className="text-xs text-gray-500 font-sans font-light leading-relaxed line-clamp-2">
                          {folder.description}
                        </p>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 pb-6 pt-3 border-t border-gray-50 flex justify-between items-center bg-gray-50/50">
                      <span className="text-[10px] text-brand-gold-dark font-sans font-bold uppercase tracking-wider">
                        Events Folder
                      </span>
                      
                      <button
                        title="Delete this folder"
                        onClick={(e) => handleDeleteFolder(folder.id, e)}
                        className="text-gray-300 hover:text-red-500 p-1.5 hover:bg-red-50 rounded-lg transition duration-200 cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== INDIVIDUAL FOLDER DETAILED VIEW ==================== */}
        {selectedFolderId && currentFolder && (
          <div className="space-y-8 animate-none">
            {/* Folder Cover / Banner details */}
            <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center space-x-2 text-[11px] text-gray-400 font-mono">
                  <span>Folder View</span>
                  <span>•</span>
                  <span>{currentFolder.createdAt}</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-brand-blue leading-snug">
                  {currentFolder.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 font-sans font-light leading-relaxed">
                  {currentFolder.description}
                </p>
              </div>

              {/* Add image inside this folder */}
              <button
                id="btn-add-image-trigger"
                onClick={() => setIsAddImageOpen(true)}
                className="bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-display font-bold px-4 py-3 rounded-xl flex items-center space-x-2 transition cursor-pointer shrink-0 shadow"
              >
                <Plus size={16} />
                <span>Add Photo to Folder</span>
              </button>
            </div>

            {/* Folder Photos Grid */}
            {currentFolder.images.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-gray-200 max-w-lg mx-auto space-y-4">
                <ImageIcon size={44} className="mx-auto text-gray-300" />
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-gray-700">Folder is empty</h4>
                  <p className="text-xs text-gray-400 font-sans max-w-xs mx-auto leading-relaxed">
                    Start populating this event folder by adding nursing practice or ceremony photos.
                  </p>
                </div>
                <button
                  onClick={() => setIsAddImageOpen(true)}
                  className="bg-brand-blue/5 hover:bg-brand-blue/10 text-brand-blue text-xs font-display font-bold px-4 py-2.5 rounded-lg transition cursor-pointer inline-flex items-center space-x-1.5"
                >
                  <Plus size={14} />
                  <span>Add First Photo</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {currentFolder.images.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.25 }}
                    className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:border-brand-gold/25 group relative flex flex-col cursor-pointer hover:shadow-md transition-all duration-300"
                    onClick={() => setSelectedImageIdx(idx)}
                  >
                    {/* Image */}
                    <div className="h-56 relative overflow-hidden bg-gray-50">
                      <img
                        src={img.url}
                        alt={img.caption}
                        className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-dark-navy/5 group-hover:bg-dark-navy/30 transition-all duration-300" />

                      {/* Delete Individual Image */}
                      <button
                        title="Remove image from folder"
                        onClick={(e) => handleDeleteImage(img.id, e)}
                        className="absolute top-3 right-3 bg-white/95 hover:bg-red-50 text-gray-400 hover:text-red-500 p-2 rounded-xl transition duration-200 shadow opacity-0 group-hover:opacity-100 z-10 cursor-pointer border border-gray-100"
                      >
                        <Trash2 size={13} />
                      </button>

                      {/* Eye indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                        <span className="bg-white/90 text-brand-blue p-2.5 rounded-full shadow-lg">
                          <Eye size={18} />
                        </span>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="p-4 bg-white flex-grow border-t border-gray-50 flex items-start justify-between gap-3">
                      <p className="text-xs text-gray-600 font-sans font-light leading-relaxed line-clamp-2">
                        {img.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ==================== CREATE NEW FOLDER MODAL ==================== */}
        <AnimatePresence>
          {isNewFolderOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="new-folder-modal-wrapper">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsNewFolderOpen(false)}
                className="fixed inset-0 bg-dark-navy/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6 md:p-8 space-y-6 z-50"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setIsNewFolderOpen(false)}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                      <FolderPlus size={22} />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-brand-blue">
                      Create New Event Folder
                    </h3>
                    <p className="text-xs text-gray-400 font-sans font-light">
                      Folders allow you to group related pictures (e.g. "Independence Day", "Capping Ceremony").
                    </p>
                  </div>

                  <form onSubmit={handleCreateFolder} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-dark-navy block">
                        Event Title / Folder Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., Cultural Fest Symphony 2026"
                        value={newFolderName}
                        onChange={(e) => setNewFolderName(e.target.value)}
                        className="w-full bg-light-gray text-xs px-4 py-3 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-blue outline-none transition-all placeholder-gray-400 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-dark-navy block">
                        Short Description / Subtitle
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Describe what events took place during this milestone."
                        value={newFolderDesc}
                        onChange={(e) => setNewFolderDesc(e.target.value)}
                        className="w-full bg-light-gray text-xs px-4 py-3 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-blue outline-none transition-all placeholder-gray-400 font-sans resize-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-dark-navy block">
                        Cover Image URL (Optional)
                      </label>
                      <input
                        type="url"
                        placeholder="https://images.unsplash.com/photo-..."
                        value={newFolderCover}
                        onChange={(e) => setNewFolderCover(e.target.value)}
                        className="w-full bg-light-gray text-xs px-4 py-3 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-blue outline-none transition-all placeholder-gray-400 font-sans"
                      />
                      <span className="text-[10px] text-gray-400 block font-light leading-relaxed">
                        If left blank, the standard clinical campus cover picture will be used as background.
                      </span>
                    </div>

                    {/* Pre-select cover presets */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                        Or Quick Select a Premium Unsplash Cover:
                      </span>
                      <div className="grid grid-cols-2 gap-2 max-h-32 overflow-y-auto p-1.5 bg-gray-50 rounded-xl border border-gray-100">
                        {PRESET_IMAGES.map((preset) => (
                          <button
                            key={preset.label}
                            type="button"
                            onClick={() => setNewFolderCover(preset.url)}
                            className={`p-1.5 text-left rounded-lg text-[10px] truncate border font-sans transition-all cursor-pointer ${
                              newFolderCover === preset.url
                                ? 'bg-brand-blue text-white border-brand-blue font-semibold shadow-sm'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsNewFolderOpen(false)}
                        className="flex-1 border border-gray-200 hover:bg-gray-50 text-dark-navy text-xs font-display font-bold py-3.5 rounded-xl transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-display font-bold py-3.5 rounded-xl transition shadow cursor-pointer"
                      >
                        Create Folder
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* ==================== ADD IMAGE TO FOLDER MODAL ==================== */}
        <AnimatePresence>
          {isAddImageOpen && selectedFolderId && (
            <div className="fixed inset-0 z-50 overflow-y-auto" id="add-image-modal-wrapper">
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsAddImageOpen(false)}
                className="fixed inset-0 bg-dark-navy/60 backdrop-blur-sm"
              />

              {/* Modal Container */}
              <div className="flex min-h-screen items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 p-6 md:p-8 space-y-6 z-50"
                >
                  {/* Close button */}
                  <button
                    onClick={() => setIsAddImageOpen(false)}
                    className="absolute top-5 right-5 text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition cursor-pointer"
                  >
                    <X size={18} />
                  </button>

                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold-dark">
                      <ImageIcon size={22} />
                    </div>
                    <h3 className="font-display font-extrabold text-xl text-brand-blue">
                      Add Image to Folder
                    </h3>
                    <p className="text-xs text-gray-400 font-sans font-light">
                      Add a photo with a caption directly into the event folder: <span className="font-semibold text-brand-blue">{currentFolder?.name}</span>.
                    </p>
                  </div>

                  <form onSubmit={handleAddImageToFolder} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-dark-navy block">
                        Image URL *
                      </label>
                      <input
                        type="url"
                        required
                        placeholder="https://images.unsplash.com/photo-..."
                        value={newImageUrl}
                        onChange={(e) => setNewImageUrl(e.target.value)}
                        className="w-full bg-light-gray text-xs px-4 py-3 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-blue outline-none transition-all placeholder-gray-400 font-sans"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-dark-navy block">
                        Photo Caption *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g., GNM final year students receiving clinical simulation certificates."
                        value={newImageCaption}
                        onChange={(e) => setNewImageCaption(e.target.value)}
                        className="w-full bg-light-gray text-xs px-4 py-3 rounded-xl border border-gray-100 focus:bg-white focus:border-brand-blue outline-none transition-all placeholder-gray-400 font-sans"
                      />
                    </div>

                    {/* Pre-select image presets */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                        Or Quick Select a High-Res Nursing Photo:
                      </span>
                      <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto p-1.5 bg-gray-50 rounded-xl border border-gray-100">
                        {PRESET_IMAGES.map((preset) => (
                          <button
                            key={preset.label}
                            type="button"
                            onClick={() => setNewImageUrl(preset.url)}
                            className={`p-2 text-left rounded-lg text-[10px] truncate border font-sans transition-all cursor-pointer ${
                              newImageUrl === preset.url
                                ? 'bg-brand-gold/20 text-brand-gold-dark border-brand-gold font-semibold shadow-sm'
                                : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            {preset.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setIsAddImageOpen(false)}
                        className="flex-1 border border-gray-200 hover:bg-gray-50 text-dark-navy text-xs font-display font-bold py-3.5 rounded-xl transition cursor-pointer"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-display font-bold py-3.5 rounded-xl transition shadow cursor-pointer"
                      >
                        Add Photo
                      </button>
                    </div>
                  </form>
                </motion.div>
              </div>
            </div>
          )}
        </AnimatePresence>

        {/* ==================== PHOTO VIEW LIGHTBOX MODAL ==================== */}
        <AnimatePresence>
          {selectedImageIdx !== null && currentFolder && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImageIdx(null)}
            >
              <button
                onClick={() => setSelectedImageIdx(null)}
                className="absolute top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition cursor-pointer z-50"
              >
                <X size={20} />
              </button>

              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer z-50"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Main Expanded Image Card */}
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.95 }}
                className="max-w-4xl w-full text-center space-y-4"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="rounded-2xl overflow-hidden max-h-[70vh] bg-black border border-white/10 shadow-2xl flex justify-center items-center">
                  <img 
                    src={currentFolder.images[selectedImageIdx].url} 
                    alt={currentFolder.images[selectedImageIdx].caption}
                    className="max-w-full max-h-[70vh] object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-white space-y-1.5 px-4">
                  <span className="text-[10px] bg-brand-gold text-dark-navy font-extrabold px-3.5 py-1 rounded-full uppercase tracking-widest inline-block">
                    {currentFolder.name}
                  </span>
                  <p className="text-sm font-sans font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    {currentFolder.images[selectedImageIdx].caption}
                  </p>
                </div>
              </motion.div>

              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition cursor-pointer z-50"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
