const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  image: { type: String, default: '' },
  category: { type: String, required: true },
  author: { type: String, default: 'Admin' },
  views: { type: Number, default: 0 },
  featured: { type: Boolean, default: false },
  tags: [String],
  slug: { type: String, unique: true },
}, { timestamps: true });

// Auto-generate slug from title
articleSchema.pre('save', function(next) {
  if (this.isModified('title') || !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim() + '-' + Date.now();
  }
  next();
});

module.exports = mongoose.model('Article', articleSchema);
