<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard | Admin</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/admin.css">
</head>
<body class="admin-body" id="admin-page" data-page="dashboard">

  <!-- Sidebar -->
  <aside class="admin-sidebar" id="admin-sidebar">
    <div class="sidebar-logo">
      <div class="logo-icon">N</div>
      <div><span>NewsHub</span><small>Admin Panel</small></div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section-title">Main</div>
      <a href="/admin/dashboard.html" class="sidebar-link active">
        <span class="icon">📊</span> Dashboard
      </a>
      <a href="/admin/articles.html" class="sidebar-link">
        <span class="icon">📰</span> Articles
      </a>
      <a href="/admin/create.html" class="sidebar-link">
        <span class="icon">✏️</span> Create Article
      </a>
      <a href="/admin/categories.html" class="sidebar-link">
        <span class="icon">📂</span> Categories
      </a>
      <div class="nav-section-title" style="margin-top:12px">System</div>
      <a href="/" class="sidebar-link" target="_blank">
        <span class="icon">🌐</span> View Site
      </a>
      <a href="#" class="sidebar-link" onclick="logout()">
        <span class="icon">🚪</span> Logout
      </a>
    </nav>
    <div class="sidebar-footer">NewsHub Admin v1.0</div>
  </aside>

  <!-- Main -->
  <div class="admin-main">
    <div class="admin-topbar">
      <div class="topbar-left">
        <span class="page-title">📊 Dashboard</span>
      </div>
      <div class="topbar-right">
        <a href="/admin/create.html" class="btn btn-primary btn-sm">+ New Article</a>
        <div class="user-badge">
          <div class="user-avatar" id="user-avatar-text">A</div>
          <span id="topbar-username">Admin</span>
        </div>
      </div>
    </div>

    <div class="admin-content">
      <!-- Stats -->
      <div class="stats-grid">
        <div class="stat-card">
          <div class="stat-icon red">📰</div>
          <div class="stat-info">
            <h3 id="total-articles">—</h3>
            <p>Total Articles</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon blue">👁️</div>
          <div class="stat-info">
            <h3>—</h3>
            <p>Total Views</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon green">📂</div>
          <div class="stat-info">
            <h3 id="total-cats">—</h3>
            <p>Categories</p>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-icon yellow">⭐</div>
          <div class="stat-info">
            <h3>—</h3>
            <p>Featured</p>
          </div>
        </div>
      </div>

      <!-- Recent Articles Table -->
      <div class="table-card">
        <div class="table-header">
          <h3>📋 Recent Articles</h3>
          <a href="/admin/create.html" class="btn btn-primary btn-sm">+ Add New</a>
        </div>
        <div class="table-responsive">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Author</th>
                <th>Date</th>
                <th>Views</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="recent-tbody">
              <tr><td colspan="7" style="text-align:center;padding:20px;color:#999">Loading...</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div class="toast" id="toast"></div>
  <script src="/js/admin.js"></script>
  <script>
    // Update stats from loaded data
    fetch('/api/categories').then(r=>r.json()).then(d=>{ document.getElementById('total-cats').textContent = d.length; });
  </script>
</body>
</html>
