import { useState, useEffect, useMemo } from "react";
import type { Project, Category, SortField, SortOrder } from "../../types/project";
import { fetchProjects } from "../../services/projectService";
import { applyFilters } from "../../utils/projectHelpers";
import ProjectFilter from "../forms/ProjectFilter";
import Card from "../ui/Card";
import Alert from "../ui/Alert";

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<Category | "all">("all");
  const [sortField, setSortField] = useState<SortField>("year");
  const [sortOrder, setSortOrder] = useState<SortOrder>("desc");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchProjects();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Bilinmeyen hata oluştu");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const filtered = useMemo(
    () => applyFilters(projects, search, category, sortField, sortOrder),
    [projects, search, category, sortField, sortOrder]
  );

  return (
    <section id="projeler" className="py-16 px-4 bg-gray-50 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Projelerim
        </h2>

        {error && (
          <div className="mb-6">
            <Alert variant="error" title="Hata">
              {error}
              <button
                onClick={() => window.location.reload()}
                className="block text-sm text-red-600 underline mt-2 bg-transparent border-0 cursor-pointer p-0"
              >
                Tekrar dene
              </button>
            </Alert>
          </div>
        )}

        {!loading && !error && (
          <ProjectFilter
            search={search}
            onSearchChange={setSearch}
            category={category}
            onCategoryChange={setCategory}
            sortField={sortField}
            onSortFieldChange={setSortField}
            sortOrder={sortOrder}
            onSortOrderChange={setSortOrder}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        )}

        {loading && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600" />
            <p className="sr-only">Yükleniyor...</p>
          </div>
        )}

        {!loading && !error && filtered.length === 0 && (
          <p className="text-center text-gray-500 py-12">
            Eşleşen proje bulunamadı.
          </p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(project => (
            <Card
              key={project.id}
              variant="elevated"
              title={project.title}
              image={project.image}
              imageAlt={`${project.title} ekran görüntüsü`}
            >
              <p className="text-sm mb-3 text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1 mb-2">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-2 py-0.5 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-auto flex items-center justify-between">
                <span>{project.year} &middot; {project.category}</span>
                {project.featured && (
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full font-medium">
                    Öne Çıkan
                  </span>
                )}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
