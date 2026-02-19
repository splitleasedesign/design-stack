import json
from pathlib import Path

# File paths
LIBRARY_PATH = r"C:\Users\Split Lease\Documents\design-stack\library\elements.json"
RUN_DIR = r"C:\Users\Split Lease\Documents\design-stack\runs\2026-02-12_1359"

# Elements to reinforce (increment lens_count)
REINFORCE_MERGE = ["works-001", "communicates-003", "looks-002"]
REINFORCE_KEEP_BOTH = ["communicates-002", "feels-001", "feels-002", "behaves-001"]
ALL_REINFORCE = REINFORCE_MERGE + REINFORCE_KEEP_BOTH

# New elements to add (from keep_both reinforcements)
NEW_FROM_KEEP_BOTH = {
    "works-002": "layer-1/works-elements.json",
    "works-003": "layer-1/works-elements.json",
    "works-004": "layer-1/works-elements.json",
    "behaves-002": "layer-4/behaves-elements.json",
    "feels-001": "layer-5/feels-elements.json",  # from new run
}

# Pure extension elements (no existing match)
NEW_EXTENSIONS = {
    "works-005": "layer-1/works-elements.json",
    "communicates-006": "layer-2/communicates-elements.json",
    "looks-003": "layer-3/looks-elements.json",
    "looks-006": "layer-3/looks-elements.json",
    "behaves-004": "layer-4/behaves-elements.json",
    "feels-002": "layer-5/feels-elements.json",  # from new run
    "feels-005": "layer-5/feels-elements.json",
}

def load_json(filepath):
    """Load JSON file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        return json.load(f)

def save_json(filepath, data):
    """Save JSON file with proper formatting"""
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

def increment_lens_count(library, element_ids):
    """Increment lens_count for specified elements"""
    for element in library['elements']:
        if element['id'] in element_ids:
            if 'confidence' in element and 'lens_count' in element['confidence']:
                element['confidence']['lens_count'] += 1
                print(f"[+] Incremented lens_count for {element['id']}: {element['confidence']['lens_count']}")

def add_new_element(element, element_id, source_run):
    """Add metadata to new element"""
    # Create a copy to avoid modifying the original
    new_elem = element.copy()

    # Prefix ID with "run2_"
    new_elem['id'] = f"run2_{element_id}"

    # Add metadata
    new_elem['confidence'] = {'lens_count': 1}
    new_elem['status'] = 'pending_review'
    new_elem['source_run'] = source_run
    new_elem['source_lens'] = {
        'host_call': 'jessica-filomeno-call.txt',
        'book_extract': 'cialdini-authority-liking-scarcity.txt'
    }

    return new_elem

def main():
    print("Starting element merge process...")
    print()

    # Load existing library
    print("Loading existing library...")
    library = load_json(LIBRARY_PATH)
    print(f"[OK] Loaded {len(library['elements'])} existing elements")
    print()

    # Step 1: Increment lens_count for reinforced elements
    print("Step 1: Incrementing lens_count for reinforced elements...")
    increment_lens_count(library, ALL_REINFORCE)
    print()

    # Step 2: Collect new elements to add
    print("Step 2: Collecting new elements to add...")
    all_new_elements = {}
    all_new_elements.update(NEW_FROM_KEEP_BOTH)
    all_new_elements.update(NEW_EXTENSIONS)

    new_elements_to_add = []

    for element_id, relative_path in all_new_elements.items():
        source_file = Path(RUN_DIR) / relative_path
        print(f"Reading {element_id} from {source_file.name}...")

        source_data = load_json(source_file)

        # Find the element in the source file
        found = False
        for elem in source_data['elements']:
            if elem['id'] == element_id:
                # Add with metadata
                new_elem = add_new_element(elem, element_id, "2026-02-12_1359")
                new_elements_to_add.append(new_elem)
                print(f"[OK] Added {new_elem['id']} to queue")
                found = True
                break

        if not found:
            print(f"[WARN] WARNING: Element {element_id} not found in {relative_path}")

    print()
    print(f"Total new elements to add: {len(new_elements_to_add)}")
    print()

    # Step 3: Append new elements to library
    print("Step 3: Appending new elements to library...")
    library['elements'].extend(new_elements_to_add)
    print(f"[OK] Library now contains {len(library['elements'])} elements")
    print()

    # Step 4: Save updated library
    print("Step 4: Saving updated library...")
    save_json(LIBRARY_PATH, library)
    print(f"[OK] Saved to {LIBRARY_PATH}")
    print()

    # Summary
    print("=" * 60)
    print("MERGE SUMMARY")
    print("=" * 60)
    print(f"Reinforced (lens_count incremented): {len(ALL_REINFORCE)}")
    for elem_id in ALL_REINFORCE:
        print(f"  - {elem_id}")
    print()
    print(f"New elements added: {len(new_elements_to_add)}")
    for elem in new_elements_to_add:
        print(f"  - {elem['id']} (from {elem['id'].replace('run2_', '')})")
    print()
    print(f"Total elements in library: {len(library['elements'])}")
    print("=" * 60)

if __name__ == "__main__":
    main()
